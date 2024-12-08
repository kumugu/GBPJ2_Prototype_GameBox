package com.example.gjb.controllers;

import com.example.gjb.models.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    @GetMapping
    public ResponseEntity<String> getProfile() {
        // 현재 로그인된 사용자 정보 반환 (실제 구현 시 SecurityContext 사용)
        return ResponseEntity.ok("Profile information");
    }
}
