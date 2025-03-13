package com.fpt.service;

import com.fpt.model.Player;
import com.fpt.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlayerService {
    
    @Autowired
    private PlayerRepository playerRepository;
    
    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }
    
    public Player savePlayer(Player player) {
        return playerRepository.save(player);
    }
    
    public Optional<Player> getPlayerById(Long id) {
        return playerRepository.findById(id);
    }
    
    public void deletePlayer(Long id) {
        playerRepository.deleteById(id);
    }
    
    public Player updatePlayer(Long id, Player playerDetails) {
        Player player = playerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Player not found with id: " + id));
        
        player.setPlayerName(playerDetails.getPlayerName());
        player.setPlayerAge(playerDetails.getPlayerAge());
        player.setIndexName(playerDetails.getIndexName());
        player.setValue(playerDetails.getValue());
        
        return playerRepository.save(player);
    }
} 