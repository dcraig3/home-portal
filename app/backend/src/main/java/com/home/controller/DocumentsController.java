package com.home.controller;

import java.util.List;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.home.models.Documents;
import com.home.repositories.DocumentsRepository;
import com.home.models.Item;
import com.home.repositories.ItemRepository;

@RestController
@RepositoryRestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/Documents")
public class DocumentsController {
	
	@Autowired
	private ItemRepository itemRepo;

	@Autowired
	private DocumentsRepository repo;

	@RequestMapping(value = "/all", method = RequestMethod.GET) ResponseEntity<List<Documents>> getAllInfo() {
		List<Documents> Info = repo.getAll();
		return ResponseEntity.ok(Info);
	};

	@RequestMapping(value = "/fromRef", method = RequestMethod.GET) ResponseEntity<List<Object>> fromRef(@RequestParam("id") long id) {
		// RefCode refCode = repo.getRefCode(id);
		List<Object> documents = repo.getByItemId(id);
		return ResponseEntity.ok(documents);
	};

	// @RequestMapping(value = "/updateDocuments", method = RequestMethod.POST) ResponseEntity<Documents> updateDocuments(@RequestParam("documents") Documents documents) {
	// 	repo.save(documents);
	// 	return ResponseEntity.ok(documents);
	// }

	@RequestMapping(value = "/uploadDocument", method = RequestMethod.POST) ResponseEntity<Documents> uploadDocument(@RequestParam("itemId") long id, @RequestParam("file") MultipartFile file) {
		Documents documents = new Documents();
		// Item item = itemRepo.getById(id);
		try{
			documents.setAttachment(file.getBytes());
			String name = file.getOriginalFilename();
			documents.setTitle(name);
			documents.setItemId(id);
			repo.save(documents);
		} catch (IOException ex) {
			System.out.println("Error uploading file");
		}
		return ResponseEntity.ok(documents);
	}
	

	@RequestMapping(value = "/deleteDocument", method = RequestMethod.DELETE) ResponseEntity<String> deleteDocument(@RequestParam("id") long id) {
		String message = "";
		if (id == 0) {
			message = "id cannot be 0";
		} else {
			message = "";
			repo.deleteById(id);
		}
		return ResponseEntity.ok(message);
	}

	
	@RequestMapping(value = "/downloadDoc", method = RequestMethod.GET)
	@ResponseBody
	public void downloadDoc(HttpServletRequest request, HttpServletResponse response,@RequestParam("id") long id) throws Exception {
		Documents document = new Documents();
		try {
			document = repo.getById(id);
		} catch (Exception e) {
			System.out.println(e);
		}
		response.setContentType("application/octet-stream");
		response.setHeader("Access-Control-Expose-Headers", "Content-Disposition");
		response.setHeader("Content-Disposition", "attachment; filename=" + document.getTitle());

		/** assume that below line gives you file content in byte array **/
		byte[] binary = document.getAttachment();
		response.getOutputStream().write(binary);
		response.flushBuffer();
	}
}