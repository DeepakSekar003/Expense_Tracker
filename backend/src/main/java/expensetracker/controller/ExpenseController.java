package com.expensetracker.controller;

import com.expensetracker.model.Expense;
import com.expensetracker.repository.ExpenseRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/expenses")
public class ExpenseController {

    private final ExpenseRepository expenseRepository;

    public ExpenseController(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    @GetMapping
    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    @PostMapping
    public Expense addExpense(@RequestBody Expense expenses) {
        return expenseRepository.save(expenses);
    }

    @DeleteMapping("/{id}")
    public void deleteExpense(@PathVariable Long id) {
        expenseRepository.deleteById(id);
    }

    @PutMapping("/{id}")
public Expense updateExpense(@PathVariable Long id, @RequestBody Expense expense) {

    Expense existingExpense = expenseRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Expense not found"));

    existingExpense.setAmount(expense.getAmount());
    existingExpense.setDescription(expense.getDescription());
    existingExpense.setExpenseDate(expense.getExpenseDate());

    return expenseRepository.save(existingExpense);
}
}