package com.expensetracker.service;

import com.expensetracker.model.Income;
import com.expensetracker.repository.IncomeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class IncomeService {

 @Autowired
 private IncomeRepository incomeRepository;

 public List<Income> getAllIncome() {
  return incomeRepository.findAll();
 }

 public Income saveIncome(Income income) {
  return incomeRepository.save(income);
 }
}