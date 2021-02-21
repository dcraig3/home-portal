package com.home.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.home.models.Documents;

@Repository
public interface DocumentsRepository  extends JpaRepository<Documents, Long> {

    @Query("select d from Documents d")
    public List<Documents> getAll();
    
    @Query("select d.id, d.title from Documents d where d.itemId = :id")
    public List<Object> getByItemId(long id);

    @Query("select d from Documents d where d.id = :id")
    public Documents getById(long id);

}