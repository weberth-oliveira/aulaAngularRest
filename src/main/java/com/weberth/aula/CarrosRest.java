package com.weberth.aula;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/carros")
public class CarrosRest {
	
	@Autowired
	private Carrosdao carrosdao;
	
	@GetMapping
	public List<Carros> get() {
		return carrosdao.findAll();
	}
	
	@PostMapping
	public void post(@RequestBody Carros carros) {
		carrosdao.save(carros);
		
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id) {
		carrosdao.deleteById(id);
		
	}
}
