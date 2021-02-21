package com.home.controller;

import java.util.List;
import java.io.IOException;

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

import com.home.models.Item;
import com.home.models.RefCodes;
import com.home.repositories.ItemRepository;
import com.home.repositories.RefCodesRepository;

@RestController
@RepositoryRestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/Item")
public class ItemController {
	
	@Autowired
	private RefCodesRepository refRepo;

	@Autowired
	private ItemRepository repo;

	@RequestMapping(value = "/all", method = RequestMethod.GET) ResponseEntity<List<Item>> getAllInfo() {
		List<Item> Info = repo.getAll();
		return ResponseEntity.ok(Info);
	};

	@RequestMapping(value = "/fromRef", method = RequestMethod.GET) ResponseEntity<List<Item>> fromRef(@RequestParam("code") long code) {
		// RefCode refCode = repo.getRefCode(id);
		List<Item> item = repo.getByRefCode(code);
		return ResponseEntity.ok(item);
	};

	@RequestMapping(value = "/fromId", method = RequestMethod.GET) ResponseEntity<Item> fromId(@RequestParam("id") long id) {
		Item item = repo.getById(id);
		return ResponseEntity.ok(item);
	};

	@RequestMapping(value = "/uploadItem", method = RequestMethod.POST) ResponseEntity<Item> uploadItem(@RequestBody Item item) {
		repo.save(item);
		return ResponseEntity.ok(item);
	}

	@RequestMapping(value = "/updateItem", method = RequestMethod.POST) ResponseEntity<Item> updateItem(@RequestBody Item item) {
		repo.save(item);
		return ResponseEntity.ok(item);
	}

	@RequestMapping(value = "/uploadImage", method = RequestMethod.POST) ResponseEntity<Item> uploadImage(@RequestParam("id") long id, @RequestParam("file") MultipartFile file) {
		Item item = repo.getById(id);
		try{
			item.setImage(file.getBytes());
			String name = file.getOriginalFilename();
			System.out.println(name);
			String[] splitString = name.split("\\.");
			System.out.println(splitString.length);
			String mimeType = splitString[splitString.length-1];
			item.setImgMime(mimeType);
			repo.save(item);
		} catch (IOException ex) {
			System.out.println("Error uploading file");
		}
		return ResponseEntity.ok(item);
	}
	

	@RequestMapping(value = "/deleteItem", method = RequestMethod.DELETE) ResponseEntity<String> deleteItem(@RequestParam("id") long id) {
		repo.deleteById(id);
		return ResponseEntity.ok("");
	}
}