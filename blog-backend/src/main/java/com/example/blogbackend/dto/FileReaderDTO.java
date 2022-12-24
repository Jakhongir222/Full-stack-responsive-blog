package com.example.blogbackend.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)

public record FileReaderDTO(
        
        String articleId,
        String articleTitle,
        String articleText
) {
}
