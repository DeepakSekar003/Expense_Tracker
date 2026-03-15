package com.expensetracker.repository;

import com.expensetracker.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {

    @Query("SELECT SUM(e.amount) FROM Expense e")
    Double getTotalExpense();

}