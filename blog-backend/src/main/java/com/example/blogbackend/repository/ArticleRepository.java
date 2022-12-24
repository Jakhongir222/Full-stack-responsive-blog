package com.example.blogbackend.repository;


import com.example.blogbackend.model.Article;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ArticleRepository {

    @Autowired
    private JpaArticleRepository repo;

    public Object getArticle(String articleId) {
        return repo.findArticleByArticleId(articleId);
    }

    public Object saveArticle(Article article) {
        return repo.save(article);
    }
}
