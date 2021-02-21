package com.home.models;

import javax.persistence.*;

@Entity
@Table(name="REF_CODES")
@SequenceGenerator(name = "REF_CODES_SEQUENCE", sequenceName = "REF_CODES_SEQ", allocationSize = 1)
public class RefCodes {

    @Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "REF_CODES_SEQUENCE")
    private long id;

    @Column(name="NAME")
    private String name;
    
	@ManyToOne(optional=true)	
	@JoinColumn(name="PARENT_ID", insertable=false, updatable=false)
	private RefCodes parentRefCode;
	
	@Column(name="PARENT_ID", nullable=true)
	private Long parentId;

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public RefCodes getParentRefCode() {
		return this.parentRefCode;
	}

	public void setParentRefCode(RefCodes parentRefCode) {
		this.parentRefCode = parentRefCode;
	}

	public Long getParentId() {
		return parentId;
	}

	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}
    
}