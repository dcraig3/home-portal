package com.home.controller;

import java.util.List;

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

import com.home.models.RefCodes;
import com.home.repositories.RefCodesRepository;

@RestController
@RepositoryRestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/RefCodes")
public class RefCodesController {

	@Autowired
	private RefCodesRepository repo;

	@RequestMapping(value = "/all", method = RequestMethod.GET) ResponseEntity<List<RefCodes>> getAllInfo() {
		List<RefCodes> Info = repo.getAll();
		return ResponseEntity.ok(Info);
	};

	@RequestMapping(value = "/byName", method = RequestMethod.GET) ResponseEntity<RefCodes> getAllInfo(@RequestParam("name") String name) {
		RefCodes Info = repo.getByName(name);
		return ResponseEntity.ok(Info);
	};

	@RequestMapping(value = "/byId", method = RequestMethod.GET) ResponseEntity<RefCodes> getRefCodeById(@RequestParam("id") long id) {
		RefCodes Info = repo.getRefCode(id);
		return ResponseEntity.ok(Info);
	};

	@RequestMapping(value = "/getParents", method = RequestMethod.GET) 
	ResponseEntity<RefCodes> getParents(@RequestParam("id") long id) {
		long parentId = repo.getParents(id);
		if (parentId > 0 ) {
			return ResponseEntity.ok(repo.getRefCode(parentId));
		} else {
			return null;
		}
	};

	@RequestMapping(value = "/getChildren", method = RequestMethod.GET) 
	ResponseEntity<List<RefCodes>> getChildren(@RequestParam("id") long id) {
		return ResponseEntity.ok(repo.getChildren(id));
	};

	@RequestMapping(value = "/newRefCode", method = RequestMethod.POST) 
	ResponseEntity<String> postRefCode(@RequestBody RefCodes refCode) {
		// refCode.setId(id);
		repo.save(refCode);
		return ResponseEntity.ok("");
	};

	@RequestMapping(value = "/updateRefCode", method = RequestMethod.POST) 
	ResponseEntity<RefCodes> updateRefCode(@RequestBody RefCodes refCode) {
		repo.save(refCode);
		return ResponseEntity.ok(refCode);
	};

	@RequestMapping(value = "/deleteRefCode", method = RequestMethod.DELETE) 
	ResponseEntity<String> deleteRefCode(@RequestParam("id") long id) {
		repo.deleteById(id);
		return ResponseEntity.ok("");
	};
}