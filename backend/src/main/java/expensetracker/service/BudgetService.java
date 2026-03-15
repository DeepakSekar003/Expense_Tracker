package com.expensetracker.service;

import com.expensetracker.model.Budget;
import com.expensetracker.repository.BudgetRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class BudgetService {

 @Autowired
 private BudgetRepository budgetRepository;

 public Budget saveBudget(Budget budget){

  int month = LocalDate.now().getMonthValue();
  int year = LocalDate.now().getYear();

  Optional<Budget> existing = budgetRepository.findByMonthAndYear(month,year);

  if(existing.isPresent()){
   Budget old = existing.get();
   old.setMonthlyBudget(budget.getMonthlyBudget());
   return budgetRepository.save(old);
  }

  budget.setMonth(month);
  budget.setYear(year);

  return budgetRepository.save(budget);
 }

 public Budget getCurrentBudget(){

  int month = LocalDate.now().getMonthValue();
  int year = LocalDate.now().getYear();

  return budgetRepository
   .findByMonthAndYear(month,year)
   .orElse(null);
 }

}