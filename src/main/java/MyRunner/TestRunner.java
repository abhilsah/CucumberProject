package MyRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\P10433837\\eclipse-workspace\\BDDCucumberFramework\\src\\main\\java\\Features\\ createcontact.feature",
		glue = {"Step_Definition"},
		format = {"pretty","html:test-output"},
		monochrome = true,
		strict = true,
		dryRun = false
		)

public class TestRunner {

}
