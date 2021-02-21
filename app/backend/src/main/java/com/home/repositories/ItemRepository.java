package com.home.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.home.models.Item;

@Repository
public interface ItemRepository  extends JpaRepository<Item, Long> {

    @Query("select i from Item i")
    public List<Item> getAll();
    
    @Query("select i from Item i where i.refCode.id = :code")
	public List<Item> getByRefCode(long code);
    
    @Query("select i from Item i where i.id = :id")
	public Item getById(long id);

}