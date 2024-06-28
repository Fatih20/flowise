export const parseJFBTags = (input: string): string => {
    // Regular expression to match non-escaped <JFB> tags and their contents
    const regex = /<JFB>([\s\S]*?)<\/JFB>/g

    // Function to replace matched content
    const replacer = (match: string, p1: string): string => {
        // URL-encode the captured content
        const encodedContent = encodeURIComponent(p1.trim())
        return encodedContent
    }

    // Replace non-escaped <JFB> tags and their contents
    let result = input.replace(regex, replacer)

    // Handle escaped tags by removing the backslash
    result = result.replace(/\\<JFB>/g, '<JFB>')
    result = result.replace(/\\<\/JFB>/g, '</JFB>')

    return result
}
