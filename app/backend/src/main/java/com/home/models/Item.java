package com.home.models;

import java.util.List;
import java.sql.Date;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "ITEM")
@SequenceGenerator(name = "ITEM_SEQUENCE", sequenceName = "ITEM_SEQ", allocationSize = 1)
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ITEM_SEQUENCE")
    private long id;

    @Column(name = "description")
    private String description;

    @Column(name = "model")
    private String model;

    @Column(name = "name")
    private String name;

    @Column(name = "serial")
    private String serial;

    @Column(name = "img_mime")
    private String imgMime;

    @Column(name = "buy_date")
    private Date date;

    @ManyToOne
    @JoinColumn(name = "ref_code", referencedColumnName = "ID", nullable = false)
    private RefCodes refCode;

    @Column(name = "notes")
    private String notes;

    @Column(name = "image")
    private byte[] image;

    // @OneToMany(cascade = CascadeType.MERGE)
    // @JsonIgnore
    // @JoinColumn(name = "link_id")
    // private List<Links> attachments;

    // @OneToMany(cascade = CascadeType.MERGE)
    // @JsonIgnore
	// @JoinColumn(name = "doc_att_id")
    // private List<Documents> subAttachments;

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getNotes() {
        return this.notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getModel() {
        return this.model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getSerial() {
        return this.serial;
    }

    public void setSerial(String serial) {
        this.serial = serial;
    }

    public String getImgMime() {
        return this.imgMime;
    }

    public void setImgMime(String imgMime) {
        this.imgMime = imgMime;
    }

    public Date getDate() {
        return this.date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public byte[] getImage() {
        return this.image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public RefCodes getRefCode() {
        return refCode;
    }

    public void setRefCode(RefCodes refCode) {
        this.refCode = refCode;
    }

}