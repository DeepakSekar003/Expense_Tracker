package com.expensetracker.model;

import jakarta.persistence.*;

@Entity
@Table(name = "budget")

public class Budget {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 @Column(name="monthly_budget")
 private Double monthlyBudget;

 private Integer month;

 private Integer year;

 public Long getId() { return id; }

 public Double getMonthlyBudget() { return monthlyBudget; }

 public void setMonthlyBudget(Double monthlyBudget) {
  this.monthlyBudget = monthlyBudget;
 }

 public Integer getMonth() { return month; }

 public void setMonth(Integer month) { this.month = month; }

 public Integer getYear() { return year; }

 public void setYear(Integer year) { this.year = year; }

}