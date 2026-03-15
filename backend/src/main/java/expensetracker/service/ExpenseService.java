package com.expensetracker.service;

import com.expensetracker.model.Expense;
import com.expensetracker.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ExpenseService {

 @Autowired
 private ExpenseRepository expenseRepository;

 // GET all expenses
 public List<Expense> getAllExpenses() {
  return expenseRepository.findAll();
 }

 // CREATE expense
 public Expense saveExpense(Expense expense) {
  return expenseRepository.save(expense);
 }

 // UPDATE expense
 public Expense updateExpense(Long id, Expense expenseDetails) {

  Expense expense = expenseRepository.findById(id)
          .orElseThrow(() -> new RuntimeException("Expense not found with id: " + id));

  expense.setAmount(expenseDetails.getAmount());
  expense.setDescription(expenseDetails.getDescription());
  expense.setExpenseDate(expenseDetails.getExpenseDate());
  expense.setCategory(expenseDetails.getCategory());

  return expenseRepository.save(expense);
 }

 // DELETE expense
 public void deleteExpense(Long id) {
  expenseRepository.deleteById(id);
 }

}