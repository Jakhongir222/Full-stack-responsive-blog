package com.example.blogbackend.service;


import com.example.blogbackend.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;

@org.springframework.stereotype.Service
public class Service {

    @Autowired
    ArticleRepository repo;

    public Object getArticle(String articleId) {
        return repo.getArticle(articleId);
    }
}
