package com.expensetracker.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Income {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 private double amount;

 private String source;

 private LocalDate incomeDate;

 public Long getId() { return id; }

 public double getAmount() { return amount; }
 public void setAmount(double amount) { this.amount = amount; }

 public String getSource() { return source; }
 public void setSource(String source) { this.source = source; }

 public LocalDate getIncomeDate() { return incomeDate; }
 public void setIncomeDate(LocalDate incomeDate) { this.incomeDate = incomeDate; }
}