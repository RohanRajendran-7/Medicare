package com.medicare.Test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Test {

	public static void main(String[] args) throws InterruptedException {
		WebDriver driver = new ChromeDriver();
		
		driver.get("http://localhost:4200");
		
		driver.findElement(By.id("medicine")).click();
		Thread.sleep(1000);
		driver.findElement(By.id("search")).sendKeys("paracetomol");
		Thread.sleep(1000);
		driver.findElement(By.id("search-button")).click();
		driver.findElement(By.id("search-button")).click();
		Thread.sleep(1000);
		driver.findElement(By.id("login")).click();
		Thread.sleep(1000);
		driver.findElement(By.id("sample")).click();
		Thread.sleep(1000);
		driver.findElement(By.id("email")).sendKeys("rohan@d.com");
		Thread.sleep(1000);
		driver.findElement(By.id("password")).sendKeys("popper");
		Thread.sleep(1000);
		driver.findElement(By.id("submit")).click();
		driver.findElement(By.id("submit")).click();
		Thread.sleep(1000);
		
		driver.findElement(By.id("addCart")).click();
		Thread.sleep(1000);
		driver.findElement(By.id("checkout")).click();
		Thread.sleep(1000);
		
		driver.findElement(By.id("final")).click();
		Thread.sleep(1000);
		driver.findElement(By.id("place")).click();
		Thread.sleep(3000);
		driver.findElement(By.id("confirm")).sendKeys("confirm");
		Thread.sleep(3000);
		driver.findElement(By.id("success")).click();
		Thread.sleep(3000);
		driver.close();
	}
}
