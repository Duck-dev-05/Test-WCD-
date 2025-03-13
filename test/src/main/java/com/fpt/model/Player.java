package com.fpt.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "players")
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String playerName;
    private Integer playerAge;
    private String indexName;
    private Integer value;
} 