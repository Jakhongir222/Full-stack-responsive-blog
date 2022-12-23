package com.example.blogbackend.repository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ArticleRepository {

    @Autowired
    private JpaArticleRepository repo;

    public Object getArticle(String articleId) {
        return repo.findArticleByArticleId(articleId);
    }
}
