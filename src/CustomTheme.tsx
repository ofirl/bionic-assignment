import { createMuiTheme } from '@material-ui/core/styles';

export const custumTheme = createMuiTheme({
    palette: {
        text: {
            primary: '#fff',
            secondary: '#9aa4bf',
        },
    },
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: 'var(--top-bar-bg)',
            },
        },
        MuiSvgIcon: {
            colorPrimary: {
                color: 'var(--icon-fill)',
                '&:hover': {
                    color: 'white',
                },
            },
            colorAction: {
                color: 'white',
            },
            colorDisabled: {
                color: 'var(--text-disabled-color)',
            },
        },
        MuiButton: {
            root: {
                borderRadius: '1em',
                '&.minimal': {
                    minWidth: '0',
                    color: 'white',
                    '&.secondary': {
                        color: 'var(--caption-color)',
                        fontSize: '0.75em',
                    },
                    transition: 'all 0.2s ease-in-out',
                    backgroundColor: 'transparent',
                    '&:hover': {
                        color: 'var(--primary-color)',
                        backgroundColor: 'transparent',
                    },
                },

            },
            label: {
                fontFamily: 'Rajdhani, sans-serif',
                textTransform: 'initial',
                fontWeight: 700,
            },
            contained: {
                '&$disabled': {
                    color: 'var(--text-disabled-color)',
                },
            },
            outlined: {
                '&$disabled': {
                    color: 'var(--text-disabled-color)',
                },
            },
            text: {
                '&$disabled': {
                    color: 'var(--text-disabled-color)',
                },
            },
            containedPrimary: {
                backgroundColor: 'var(--button-primary-bg)',
                boxShadow: '4px 7px 12px 0 var(--button-primary-bg-shadow)',
                '&:hover': {
                    backgroundColor: 'var(--button-primary-bg-hover)',
                    boxShadow: '4px 7px 12px 0 var(--button-primary-bg-shadow)',
                },
            },
            containedSecondary: {
                backgroundColor: 'var(--button-secondary-bg)',
                boxShadow: '4px 7px 12px 0 var(--button-secondary-bg-shadow)',
                '&:hover': {
                    backgroundColor: 'var(--button-secondary-bg-hover)',
                    boxShadow: '4px 7px 12px 0 var(--button-secondary-bg-shadow)',
                },
            },
            outlinedPrimary: {
                color: 'var(--button-primary-bg)',
                borderColor: 'var(--button-primary-bg)',
                boxShadow: '4px 7px 12px 0 var(--button-primary-bg-shadow)',
                '&:hover': {
                    color: 'var(--button-primary-bg-hover)',
                    backgroundColor: 'var(--button-primary-bg-shadow)',
                    borderColor: 'var(--button-primary-bg-hover)',
                }
            },
            outlinedSecondary: {
                color: 'var(--button-secondary-bg)',
                borderColor: 'var(--button-secondary-bg)',
                boxShadow: '4px 7px 12px 0 var(--button-secondary-bg-shadow)',
                '&:hover': {
                    color: 'var(--button-secondary-bg-hover)',
                    backgroundColor: 'var(--button-secondary-bg-shadow)',
                    borderColor: 'var(--button-secondary-bg-hover)',
                }
            },
            textPrimary: {
                color: 'var(--button-primary-bg)',
                '&:hover': {
                    backgroundColor: 'var(--button-primary-bg-shadow)',
                },
            },
            textSecondary: {
                color: 'var(--button-secondary-bg)',
                '&:hover': {
                    backgroundColor: 'var(--button-secondary-bg-shadow)',
                },
            },
        },
        MuiIconButton: {
            root: {
                fill: 'var(--icon-fill)',
                color: 'white',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                    fill: 'white',
                },
            },
        },
        MuiTabs: {
            indicator: {
                backgroundColor: 'var(--button-primary-bg)',
                height: '0.25em',
            },
        },
        MuiTab: {
            root: {
                fontFamily: 'Rajdhani, sans-serif',
                fontWeight: 700,
                '&:hover': {
                    color: 'white',
                    opacity: '1',
                },
            },
        },
        MuiChip: {
            root: {
                fontFamily: 'Rajdhani, sans-serif',
            },
            colorPrimary: {
                backgroundColor: 'var(--icon-bg-hover)',
            },
            clickableColorPrimary: {
                '&:hover': {
                    backgroundColor: 'var(--icon-fill)',
                },
            },
        },
        MuiInputBase: {
            root: {
                fontFamily: 'Rajdhani,sans-serif',
                fontWeight: 700,
                color: 'white',
                '&$disabled': {
                    color: 'var(--text-disabled-color)',
                },
            },
            marginDense: {
                fontSize: '0.875em',
            },
        },
        MuiCard: {
            root: {
                backgroundColor: 'var(--content-bg)',
                color: 'white',
                borderRadius: '1em',
            },
        },
        MuiCardHeader: {
            title: {
                fontSize: '1em',
            },
            subheader: {
                fontSize: '0.875em',
            },
        },
        MuiPaper: {
            root: {
                backgroundColor: 'var(--content-bg)',
            },
        },
        MuiInputLabel: {
            root: {
                color: 'var(--text-label-color)',
                fontSize: '0.875em',
                fontFamily: 'Rajdhani,sans-serif',
                '&$focused': {
                    color: 'var(--text-label-color)',
                },
            },
        },
        MuiTextField: {
            root: {
                width: '100%',
            },
        },
        MuiInput: {
            input: {
                '&::placeholder': {
                    fontWeight: 400,
                },
            },
        },
        MuiFilledInput: {
            input: {
                '&::placeholder': {
                    fontWeight: 400,
                },
            },
        },
        MuiOutlinedInput: {
            input: {
                '&::placeholder': {
                    fontWeight: 400,
                },
            },
            root: {
                borderRadius: '0.75em',
                '&:hover': {
                    '&:not($focused) $notchedOutline': {
                        borderColor: 'var(--icon-fill)',
                    },
                },
                '&$focused $notchedOutline': {
                    borderColor: 'var(--secondary-color)',
                    borderWidth: '1px',
                },
            },
            notchedOutline: {
                borderColor: 'var(--icon-fill)',
            },
            multiline: {
                padding: '0',
                '& textarea': {
                    paddingRight: '1em',
                    paddingLeft: '1em',
                    paddingTop: '0',
                    paddingBottom: '0',
                },
            },
        },
        MuiTypography: {
            body1: {
                fontFamily: 'Rajdhani,sans-serif',
            },
            body2: {
                fontFamily: 'Rajdhani,sans-serif',
            },
            button: {
                fontFamily: 'Rajdhani,sans-serif',
            },
            caption: {
                fontFamily: 'Rajdhani,sans-serif',
                color: 'var(--caption-color)',
            },
            h1: {
                fontFamily: 'Rajdhani,sans-serif',
                fontWeight: 700,
            },
            h2: {
                fontFamily: 'Rajdhani,sans-serif',
                fontWeight: 700,
            },
            h3: {
                fontFamily: 'Rajdhani,sans-serif',
                fontWeight: 700,
            },
            h4: {
                fontFamily: 'Rajdhani,sans-serif',
                fontWeight: 700,
            },
            h5: {
                fontFamily: 'Rajdhani,sans-serif',
                fontWeight: 700,
            },
            h6: {
                fontFamily: 'Rajdhani,sans-serif',
                fontWeight: 700,
            },
            overline: {
                fontFamily: 'Rajdhani,sans-serif',
            },
            srOnly: {
                fontFamily: 'Rajdhani,sans-serif',
            },
            subtitle1: {
                fontFamily: 'Rajdhani,sans-serif',
            },
            subtitle2: {
                fontFamily: 'Rajdhani,sans-serif',
            },
        },
        MuiAccordion: {
            root: {
                backgroundColor: 'var(--content-bg)',
                borderBottom: '1px solid #2f3749',
                "&$expanded": {
                    margin: '0',
                },
            },
        },
        MuiAccordionSummary: {
            root: {
                borderBottom: '1px solid #2f3749',
            },
        },
        MuiAccordionDetails: {
            root: {
                backgroundColor: 'var(--content-secondary-bg)',
            },
        },
        MuiListItem: {
            root: {
                paddingLeft: '1em',
                '&$selected': {
                    color: 'var(--primary-color)',
                    paddingLeft: '1.3em',
                    backgroundColor: 'transparent',
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                }
            },
            button: {
                transition: 'all 0.2s linear',
                '&:hover': {
                    backgroundColor: 'transparent',
                    paddingLeft: '1.3em',
                    color: 'var(--primary-color)',
                },
            },
            gutters: {
                paddingTop: '0.4em',
                paddingBottom: '0.4em',
            },
        },
        MuiListItemText: {
            root: {
                fontWeight: 700,
                lineHeight: '1',
                margin: '0',
            },
            primary: {
                fontWeight: 700,
                lineHeight: '1',
                margin: '0',
            },
        },
        MuiPopover: {
            paper: {
                backgroundColor: 'var(--content-bg)',
                borderRadius: '1em',
            },
        },
        MuiCircularProgress: {
            colorPrimary: {
                color: 'white',
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: 'var(--content-inside-border-color)',
                marginTop: '30%',
            },
            vertical: {
                height: '40%',
            },
        },
        MuiBadge: {
            colorPrimary: {
                backgroundColor: 'var(--icon-fill-hover)',
            },
        },
        MuiTooltip: {
            tooltip: {
                borderRadius: '1em',
                backgroundColor: 'var(--icon-bg-hover)',
                fontFamily: 'Rajdhani,sans-serif',
                fontWeight: 700,
                fontSize: '0.75em',
            },
        },
    },
});