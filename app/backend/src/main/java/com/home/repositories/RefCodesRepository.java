package com.home.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.home.models.RefCodes;

@Repository
public interface RefCodesRepository  extends JpaRepository<RefCodes, Long> {

    @Query("select n from RefCodes n")
    public List<RefCodes> getAll();

    @Query("select n from RefCodes n WHERE n.id = :id")
    public RefCodes getRefCode(long id);
    
    @Query("select n.parentId from RefCodes n WHERE n.id = :id")
	public long getParents(long id);
    
    @Query("select n from RefCodes n WHERE n.parentId = :id")
	public List<RefCodes> getChildren(long id);

    @Query("select n from RefCodes n WHERE n.name = :name")
	public RefCodes getByName(String name);

}