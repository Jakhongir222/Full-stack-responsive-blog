package com.example.blogbackend.controller;


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

    @GetMapping("/{articleId}")
    public ResponseEntity<?> getCategory(@PathVariable String articleId) {
        return ResponseEntity.ok(service.getArticle(articleId));
    }
}
