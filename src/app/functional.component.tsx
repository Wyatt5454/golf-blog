import { NgModule, OnInit } from "@angular/core";

@NgModule({})
export class FunctionalComponent implements OnInit {
  title = "example";
  rounds: any[] = [];

  isLoading: boolean | null = null;

  ngOnInit(): void {
    this.isLoading = true;
    console.log("Ending loading timer");
    setTimeout(() => {
      console.log("Ending loading timer");
      this.isLoading = false;
    }, 5000);
  }

  createLoadingSpinner = (): JSX.Element => {
    return (
      <div>
        <span>Some spinner component here</span>
      </div>
    );
  };

  createDefaultPage = (): JSX.Element => {
    return (
      <div>
        <h1>Some Default page formatting here</h1>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.isLoading ? this.createLoadingSpinner() : this.createDefaultPage}
      </div>
    );
  }
}
