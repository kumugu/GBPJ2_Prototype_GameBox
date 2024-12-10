package com.example.gjb.controllers;

import com.example.gjb.models.User;
import com.example.gjb.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;


@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        try {
            userService.registerUser(user);
            return ResponseEntity.ok("User registered successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(400).body("Registration failed: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        User authenticatedUser =
                userService.authenticate(user.getEmail(), user.getPassword());
        if (authenticatedUser != null) {
            // username 반환
            return ResponseEntity.ok(Map.of("username", authenticatedUser.getUsername()));
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }


    @GetMapping("/check-email")
    public ResponseEntity<Boolean> checkEmail(@RequestParam String email) {
        boolean exists = userService.isEmailTaken(email);
        return ResponseEntity.ok(exists);
    }

}

