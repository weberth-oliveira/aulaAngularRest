package com.weberth.aula;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class rest {

	@GetMapping
	public String recepcao() {
		return "API Rest by Weberth";
	}

	@GetMapping("/nome")
	public String nome() {
		return "Weberth Moreira de oliveira";
	}
}
