package com.home.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.home.models.Links;

@Repository
public interface LinksRepository  extends JpaRepository<Links, Long> {

    @Query("select l from Links l")
    public List<Links> getAll();
    
    @Query("select l from Links l where l.linkItem = :id")
	public List<Links> getByItemId(long id);

}