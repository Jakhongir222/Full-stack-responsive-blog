package com.example.blogbackend.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Table;

@Entity
public class Article {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(
            name = "system-uuid",
            strategy = "uuid")
    private String articleId;

    @Column(name = "article_title")
    private String articleTitle;

    @Column(name = "article_text")
    private String articleText;


}
