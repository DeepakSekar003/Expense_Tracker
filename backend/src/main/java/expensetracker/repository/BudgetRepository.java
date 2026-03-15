package com.expensetracker.repository;

import com.expensetracker.model.Budget;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BudgetRepository extends JpaRepository<Budget,Long>{

 Optional<Budget> findByMonthAndYear(Integer month, Integer year);

}