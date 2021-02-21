package com.home.models;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.NamedQuery;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="documents")
@SequenceGenerator(name = "DOCUMENTS_SEQUENCE", sequenceName = "DOCUMENTS_SEQ", allocationSize = 1)
public class Documents implements Serializable {
    /**
     * 
     */
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "DOCUMENTS_SEQUENCE")
	private long id;
	
	
	// @ManyToOne(fetch = FetchType.LAZY)
	// @JsonIgnore
	// @JoinColumn(name="doc_att_id", referencedColumnName="ID", nullable = false)
	// private Item attId;
	
    @Column(name = "ITEM_ID")
    private long itemId;

    @Lob
    @Column
    private byte[] attachment;

    @Column
    private String title;

	public byte[] getAttachment() {
		return attachment;
	}

	public void setAttachment(byte[] attachment) {
		this.attachment = attachment;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public long getItemId() {
		return itemId;
	}

	public void setItemId(long itemId) {
		this.itemId = itemId;
	}
}
