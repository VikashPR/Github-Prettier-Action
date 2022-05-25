            export function getAboutUsLink(language)                    {switch (language.toLowerCase()) {case                                                                  englishCode.toLowerCase(): return "/about-us";
                    case spanishCode.toLowerCase()                                                                                      : return "/acerca-de";}return "";}
                      export function getAboutUsLink(language) {switch (language.toLowerCase()) {
                                                            case englishCode.toLowerCase():return "/about-us";
                        case spanishCode.toLowerCase(): return "/acerca-de";}return "";
                  }

                      class                         MarketContainer extends Component {
  // code omitted for brevity
                        }
 
              const mapDispatchToProps = dispatch => {
           return {
                updateSummary: (summary, start, today) => dispatch(updateSummary(summary, start, today))}}
 
                    export default connect(null, mapDispatchToProps)(MarketContainer);
          export function createConnect(                                      {connectHOC = connectAdvanced,
                      mapStateToPropsFactories 
                = defaultMapStateToPropsFactories,                                                    mapDispatchToPropsFactories 
               =                                      defaultMapDispatchToPropsFactories,mergePropsFactories = 
            defaultMergePropsFactories,
            selectorFactory 
              = 
               defaultSelectorFactory})
  