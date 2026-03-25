package com.expensetracker.controller;

import com.expensetracker.model.Budget;
import com.expensetracker.service.BudgetService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/budget") 
public class BudgetController {

    @Autowired
    private BudgetService budgetService;

    @PostMapping
    public Budget saveBudget(@RequestBody Budget budget) {
        return budgetService.saveBudget(budget);
    }

    @GetMapping
    public Budget getBudget() {
        return budgetService.getCurrentBudget();
    }
}