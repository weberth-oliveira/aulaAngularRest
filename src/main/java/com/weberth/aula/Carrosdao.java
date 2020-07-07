package com.weberth.aula;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface Carrosdao extends JpaRepository<Carros, Integer> {

}
