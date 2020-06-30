package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class DDTTest {
	WebDriver driver;	
	@Given("User is on newtours site")
	public void user_is_on_newtours_site() {
		System.out.println("User is on Home page");
		System.setProperty("webdriver.chrome.driver", "resources/chromedriver.exe");
		driver= new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get("http://www.newtours.demoaut.com/");
	}

	@When("User enters {string}	and {string}")
	public void user_enters_and(String usern, String passw) {
	   driver.findElement(By.name("userName")).sendKeys(usern);
	   driver.findElement(By.name("password")).sendKeys(passw);
	   driver.findElement(By.name("login")).click();
	   driver.findElement(By.linkText("SIGN-OFF")).click();	   
	}

	@Then("Display user logged in newtours successfully.")
	public void display_user_logged_in_newtours_successfully() {
	    System.out.println("Display user logged in newtours successfully");
	    driver.close();
	}

}
