package testRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)

@CucumberOptions(
		features = "features/DemoDDT.feature",
		glue = {"stepDefinition"},
		plugin = {"pretty", 
				"html:target/cucmber-reports",
				"json:target/cucumber-reports/Cucumber.json"}
		)

public class DDTDemoRunner {

}
