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

import com.home.models.Links;
import com.home.repositories.LinksRepository;

@RestController
@RepositoryRestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/Links")
public class LinksController {

	@Autowired
	private LinksRepository repo;

	@RequestMapping(value = "/uploadLinks", method = RequestMethod.POST) ResponseEntity<Links> uploadLinks(@RequestBody Links link) {
		// link.setLinkItem(id);
		System.out.println(link.getLinkItem());
		System.out.println(link.getLinkAddress());
		System.out.println(link.getLinkName());
		repo.save(link);
		return ResponseEntity.ok(link);
	}

	@RequestMapping(value = "/getByItemId", method = RequestMethod.GET) ResponseEntity<List<Links>> getByItemId(@RequestParam("id") long id) {
		List<Links> links = repo.getByItemId(id);
		return ResponseEntity.ok(links);
	}

	@RequestMapping(value = "/updateLinks", method = RequestMethod.POST) ResponseEntity<Links> updateLinks(@RequestBody Links link) {
		repo.save(link);
		return ResponseEntity.ok(link);
	}

	@RequestMapping(value = "/deleteLinks", method = RequestMethod.DELETE) ResponseEntity<String> deleteLinks(@RequestParam("id") long id) {
		String message = "";
		if (id == 0) {
			message = "id cannot be 0";
		} else {
			message = "";
			repo.deleteById(id);
		}
		return ResponseEntity.ok(message);
	}
}