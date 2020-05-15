import React, { useContext } from 'react';
import { FormGroup, FormControlLabel, Switch, Typography, Divider, Box, Grid, Link } from '@material-ui/core';
import { Context, Theme } from 'context';
import { Layout } from 'components/templates/default';
export const About = () => {
    const { theme, toggleTheme, densePadding, toggleDensePadding } = useContext(Context);
    return (React.createElement(Layout, null,
        React.createElement(Grid, { container: true, direction: "column" },
            React.createElement(Typography, { variant: "h4", component: "h5" }, "ts-covid19"),
            React.createElement(Typography, { color: "textSecondary", variant: "body2" },
                "Dashboard tracking ",
                React.createElement("strong", null, "COVID-19"),
                " related data published by the",
                ' ',
                React.createElement(Link, { variant: "body2", href: "https://github.com/CSSEGISandData/COVID-19" }, "JHU CSSE COVID-19"),
                ' ',
                "dataset written in",
                ' ',
                React.createElement(Link, { variant: "body2", href: "https://www.typescriptlang.org" }, "TypeScript"),
                ' ',
                "using",
                ' ',
                React.createElement(Link, { variant: "body2", href: "https://reactjs.org" }, "React"),
                "."),
            React.createElement(Box, null,
                React.createElement(FormGroup, null,
                    React.createElement(FormControlLabel, { control: React.createElement(Switch, { checked: theme === Theme.DARK ? true : false, onChange: toggleTheme }), label: "Dark Mode" })),
                React.createElement(Divider, null),
                React.createElement(FormGroup, null,
                    React.createElement(FormControlLabel, { control: React.createElement(Switch, { checked: densePadding, onChange: toggleDensePadding }), label: "Dense table padding" }))))));
};
About.displayName = 'About';
export default About;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvc2NyaXB0L2NvbXBvbmVudHMvcGFnZXMvYWJvdXQvYWJvdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxFQUFFLEVBQXFCLFVBQVUsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUM3RCxPQUFPLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFOUcsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXRELE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBc0IsR0FBRyxFQUFFO0lBQzNDLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVyRixPQUFPLENBQ0wsb0JBQUMsTUFBTTtRQUNMLG9CQUFDLElBQUksSUFBQyxTQUFTLFFBQUMsU0FBUyxFQUFDLFFBQVE7WUFDaEMsb0JBQUMsVUFBVSxJQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLElBQUksaUJBRTFCO1lBQ2Isb0JBQUMsVUFBVSxJQUFDLEtBQUssRUFBQyxlQUFlLEVBQUMsT0FBTyxFQUFDLE9BQU87O2dCQUM1QiwrQ0FBeUI7O2dCQUErQixHQUFHO2dCQUM5RSxvQkFBQyxJQUFJLElBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsNENBQTRDLHdCQUVoRTtnQkFBQyxHQUFHOztnQkFDUSxHQUFHO2dCQUN0QixvQkFBQyxJQUFJLElBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsZ0NBQWdDLGlCQUVwRDtnQkFBQyxHQUFHOztnQkFDTCxHQUFHO2dCQUNULG9CQUFDLElBQUksSUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxxQkFBcUIsWUFFekM7b0JBRUk7WUFDYixvQkFBQyxHQUFHO2dCQUNGLG9CQUFDLFNBQVM7b0JBQ1Isb0JBQUMsZ0JBQWdCLElBQ2YsT0FBTyxFQUFFLG9CQUFDLE1BQU0sSUFBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXLEdBQUksRUFDeEYsS0FBSyxFQUFDLFdBQVcsR0FDakIsQ0FDUTtnQkFDWixvQkFBQyxPQUFPLE9BQUc7Z0JBQ1gsb0JBQUMsU0FBUztvQkFDUixvQkFBQyxnQkFBZ0IsSUFDZixPQUFPLEVBQUUsb0JBQUMsTUFBTSxJQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixHQUFJLEVBQ3hFLEtBQUssRUFBQyxxQkFBcUIsR0FDM0IsQ0FDUSxDQUNSLENBQ0QsQ0FDQSxDQUNWLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixLQUFLLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztBQUU1QixlQUFlLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2xMYWJlbCwgU3dpdGNoLCBUeXBvZ3JhcGh5LCBEaXZpZGVyLCBCb3gsIEdyaWQsIExpbmsgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbmltcG9ydCB7IENvbnRleHQsIFRoZW1lIH0gZnJvbSAnY29udGV4dCc7XG5cbmltcG9ydCB7IExheW91dCB9IGZyb20gJ2NvbXBvbmVudHMvdGVtcGxhdGVzL2RlZmF1bHQnO1xuXG5leHBvcnQgY29uc3QgQWJvdXQ6IEZ1bmN0aW9uQ29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCB7IHRoZW1lLCB0b2dnbGVUaGVtZSwgZGVuc2VQYWRkaW5nLCB0b2dnbGVEZW5zZVBhZGRpbmcgfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBjb21wb25lbnQ9XCJoNVwiPlxuICAgICAgICAgIHRzLWNvdmlkMTlcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICBEYXNoYm9hcmQgdHJhY2tpbmcgPHN0cm9uZz5DT1ZJRC0xOTwvc3Ryb25nPiByZWxhdGVkIGRhdGEgcHVibGlzaGVkIGJ5IHRoZXsnICd9XG4gICAgICAgICAgPExpbmsgdmFyaWFudD1cImJvZHkyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9DU1NFR0lTYW5kRGF0YS9DT1ZJRC0xOVwiPlxuICAgICAgICAgICAgSkhVIENTU0UgQ09WSUQtMTlcbiAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICBkYXRhc2V0IHdyaXR0ZW4gaW57JyAnfVxuICAgICAgICAgIDxMaW5rIHZhcmlhbnQ9XCJib2R5MlwiIGhyZWY9XCJodHRwczovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmdcIj5cbiAgICAgICAgICAgIFR5cGVTY3JpcHRcbiAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICB1c2luZ3snICd9XG4gICAgICAgICAgPExpbmsgdmFyaWFudD1cImJvZHkyXCIgaHJlZj1cImh0dHBzOi8vcmVhY3Rqcy5vcmdcIj5cbiAgICAgICAgICAgIFJlYWN0XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIC5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICBjb250cm9sPXs8U3dpdGNoIGNoZWNrZWQ9e3RoZW1lID09PSBUaGVtZS5EQVJLID8gdHJ1ZSA6IGZhbHNlfSBvbkNoYW5nZT17dG9nZ2xlVGhlbWV9IC8+fVxuICAgICAgICAgICAgICBsYWJlbD1cIkRhcmsgTW9kZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgIGNvbnRyb2w9ezxTd2l0Y2ggY2hlY2tlZD17ZGVuc2VQYWRkaW5nfSBvbkNoYW5nZT17dG9nZ2xlRGVuc2VQYWRkaW5nfSAvPn1cbiAgICAgICAgICAgICAgbGFiZWw9XCJEZW5zZSB0YWJsZSBwYWRkaW5nXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9HcmlkPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuQWJvdXQuZGlzcGxheU5hbWUgPSAnQWJvdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdfQ==