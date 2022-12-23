package com.example.blogbackend.repository;

import com.example.blogbackend.model.Article;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface JpaArticleRepository extends CrudRepository<Article, String> {

    @Query("SELECT articleId FROM Article ")
    List<String> findArticleByArticleId(String articleId);
}
