package com.expensetracker.model;

import jakarta.persistence.*;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Expense {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 private double amount;

 private String description;

 private LocalDate expenseDate;

@ManyToOne
@JsonIgnore
private Category category;

 public Long getId() { return id; }

 public double getAmount() { return amount; }
 public void setAmount(double amount) { this.amount = amount; }

 public String getDescription() { return description; }
 public void setDescription(String description) { this.description = description; }

 public LocalDate getExpenseDate() { return expenseDate; }
 public void setExpenseDate(LocalDate expenseDate) { this.expenseDate = expenseDate; }

 public Category getCategory() { return category; }
 public void setCategory(Category category) { this.category = category; }
}