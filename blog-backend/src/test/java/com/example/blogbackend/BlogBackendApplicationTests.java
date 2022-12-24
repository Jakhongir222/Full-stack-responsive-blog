package com.example.blogbackend;

import com.example.blogbackend.repository.FileReader;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class BlogBackendApplicationTests {

    @Autowired
    FileReader fileReader;

    @Test
    void contextLoads() {
    }

    @Test
    void shouldPrint() {
        fileReader.readJsonFileData();
    }

}
