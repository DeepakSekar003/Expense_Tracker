package com.expensetracker.controller;

import com.expensetracker.model.Income;
import com.expensetracker.service.IncomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/income")
public class IncomeController {

 @Autowired
 private IncomeService incomeService;

 @GetMapping
 public List<Income> getIncome() {
  return incomeService.getAllIncome();
 }

 @PostMapping
 public Income createIncome(@RequestBody Income income) {
  return incomeService.saveIncome(income);
 }
}