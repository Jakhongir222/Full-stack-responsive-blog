package com.example.blogbackend.repository;

import aj.org.objectweb.asm.TypeReference;
import com.example.blogbackend.dto.FileReaderDTO;
import com.example.blogbackend.model.Article;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URL;
import java.util.*;

@Component
public class FileReader {
    @Autowired
    private ArticleRepository repo;

    public void readJsonFileData(){
        String format = "data/data.json";
        ObjectMapper mapper = new ObjectMapper();

        try {
            URL resource = this.getClass().getClassLoader().getResource(format);
            byte[] bytes = new FileInputStream(resource.getPath()).readAllBytes();
            List<FileReaderDTO> dtoList = Collections.singletonList(mapper.readValue(bytes, FileReaderDTO.class));

            addFileContentToDatabase(dtoList);
        } catch (IOException | NullPointerException e) {
            e.printStackTrace();
        }
    }

    public void addFileContentToDatabase(List<FileReaderDTO> dtoList) {

        Map<String, List<Article>> map = new HashMap<String, List<Article>>();

        dtoList.forEach(dto -> {

            String articleId = UUID.randomUUID().toString();
            Article question = new Article(articleId, dto.articleTitle(), dto.articleText());

            if (map.containsKey(dto.articleTitle())){
                List<Article> mapList = map.get(dto.articleTitle());
                mapList.add(question);
                map.put(dto.articleTitle(), mapList);
            } else {
                List<Article> questionList = new ArrayList<>();
                questionList.add(question);
                map.put(dto.articleTitle(), questionList);
            }
        });

        map.forEach((key, value) -> {
            String id = UUID.randomUUID().toString();
            repo.saveArticle(new Article(id, key, value.toString()));
        });
    }
}
