package com.example.blogbackend.controller;


import com.example.blogbackend.dto.ArticleDTO;
import com.example.blogbackend.service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/article")
public class Controller {

    @Autowired
    Service service;

    @GetMapping
    public ResponseEntity<?> getAllArticles(){
        return ResponseEntity.ok(service.getAllArticles());
    }

    @GetMapping("/{articleId}")
    public ResponseEntity<?> getSpecificArticle(@PathVariable String articleId) {
        return ResponseEntity.ok(service.getArticle(articleId));
    }

    @PostMapping("/{articleId}")
    public ResponseEntity<?> createNewArticle (@RequestBody ArticleDTO articleDTO){
        return ResponseEntity.ok(service.createNewArticle(articleDTO));
    }

}
