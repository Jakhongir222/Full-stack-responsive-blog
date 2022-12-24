package com.example.blogbackend.service;


import com.example.blogbackend.dto.ArticleDTO;
import com.example.blogbackend.model.Article;
import com.example.blogbackend.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.UUID;

@org.springframework.stereotype.Service
public class Service {

    @Autowired
    ArticleRepository repo;

    public Object getArticle(String articleId) {
        return repo.getArticle(articleId);
    }

    public Object getAllArticles() {
        return repo.getAllArticles();
    }

    public Object createNewArticle(ArticleDTO articleDTO) {
        return repo.createNewArticle(new Article(UUID.randomUUID().toString(), articleDTO.articleText(), articleDTO.articleName()));
    }
}
