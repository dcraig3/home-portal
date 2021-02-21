package com.home.models;

import javax.persistence.*;

@Entity
@Table(name = "LINKS")
@SequenceGenerator(name = "LINKS_SEQUENCE", sequenceName = "LINKS_SEQ", allocationSize = 1)
public class Links {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "LINKS_SEQUENCE")
    private long id;

    @Column(name="LINK_ID")
    private long linkItem;

    @Column(name="LINK_ADDRESS")
    private String linkAddress;

    @Column(name="LINK_NAME")
    private String linkName;

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

	public long getLinkItem() {
		return linkItem;
	}

	public void setLinkItem(long linkItem) {
		this.linkItem = linkItem;
	}

    public String getLinkAddress() {
        return this.linkAddress;
    }

    public void setLinkAddress(String linkAddress) {
        this.linkAddress = linkAddress;
    }

    public String getLinkName() {
        return this.linkName;
    }

    public void setLinkName(String linkName) {
        this.linkName = linkName;
    }

}