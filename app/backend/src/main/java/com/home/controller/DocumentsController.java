package com.home.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
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

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	ResponseEntity<List<Documents>> getAllInfo() {
		List<Documents> Info = repo.getAll();
		return ResponseEntity.ok(Info);
	};

	@RequestMapping(value = "/fromRef", method = RequestMethod.GET)
	ResponseEntity<List<Object>> fromRef(@RequestParam("id") long id) {
		// RefCode refCode = repo.getRefCode(id);
		List<Object> documents = repo.getByItemId(id);
		return ResponseEntity.ok(documents);
	};

	// @RequestMapping(value = "/updateDocuments", method = RequestMethod.POST)
	// ResponseEntity<Documents> updateDocuments(@RequestParam("documents")
	// Documents documents) {
	// repo.save(documents);
	// return ResponseEntity.ok(documents);
	// }

	@RequestMapping(value = "/uploadDocument", method = RequestMethod.POST)
	ResponseEntity<Documents> uploadDocument(@RequestParam("itemId") long id,
			@RequestParam("file") MultipartFile file) {
		Documents documents = new Documents();
		// Item item = itemRepo.getById(id);
		try {
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

	@RequestMapping(value = "/deleteDocument", method = RequestMethod.DELETE)
	ResponseEntity<String> deleteDocument(@RequestParam("id") long id) {
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
	public void downloadDoc(HttpServletRequest request, HttpServletResponse response, @RequestParam("id") long id)
			throws Exception {
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

	@RequestMapping(value = "/downloadZip", method = RequestMethod.GET)
	@ResponseBody
	public void downloadZip(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("itemId") long itemId) throws Exception {
		response.setContentType("application/octet-stream");
		response.setHeader("Access-Control-Expose-Headers", "Content-Disposition");
		List<String> srcFiles = new ArrayList<String>();
		byte[] zipData = null;
		Item item = itemRepo.getById(itemId);
		String zipName = item.getName();
		// ~ " # % & * : < > ? / \ { | } are all invalid characters in a files name
		zipName = zipName.toLowerCase().replaceAll(" ", "_").replaceAll("~", "").replaceAll("\"", "")
				.replaceAll("#", "").replaceAll("%", "").replaceAll("&", "").replaceAll("\\*", "")
				.replaceAll(":", "").replaceAll("<", "").replaceAll(">", "").replaceAll("\\?", "")
				.replaceAll("/", "").replaceAll("\\{", "").replaceAll("|", "")
				.replaceAll("\\}", "").replace("\\", "") + ".zip";
		try {
			List<Documents> documents = repo.getDocsByItemId(itemId);
			for (int i = 0; i < documents.size(); i++) {
				byte[] binary = documents.get(i).getAttachment();
				FileUtils.writeByteArrayToFile(new File(documents.get(i).getTitle()), binary);
				srcFiles.add(documents.get(i).getTitle());
			}
			FileOutputStream fos = new FileOutputStream(zipName);
			ZipOutputStream zipOut = new ZipOutputStream(fos);
			for (String srcFile : srcFiles) {
				File fileToZip = new File(srcFile);
				FileInputStream fis = new FileInputStream(fileToZip);
				ZipEntry zipEntry = new ZipEntry(fileToZip.getName());
				zipOut.putNextEntry(zipEntry);

				byte[] bytes = new byte[1024];
				int length;
				while ((length = fis.read(bytes)) >= 0) {
					zipOut.write(bytes, 0, length);
				}
				fis.close();
			}
			zipOut.close();
			fos.close();
			Path path = Paths.get(zipName);
			zipData = Files.readAllBytes(path);
		} catch (Exception e) {
			System.out.println(e);
		}
		response.setHeader("Content-Disposition", "attachment; filename=" + zipName);

		/** assume that below line gives you file content in byte array **/
		response.getOutputStream().write(zipData);
		response.flushBuffer();
	}
}