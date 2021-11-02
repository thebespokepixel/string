export class BespokeString {
    /**
     * Contruct a BespokeString instance.
     * @param  {String} content The string content.
     */
    constructor(content: string);
    _string: string;
    charSets(set_: any): any;
    original(original_: any): BespokeString;
    _original: any;
    typist(printer_: any): any;
    toSuperSub(set: any): BespokeString;
    /**
     * Pad the contents.
     * @param  {Number} length [description]
     * @param  {String} char   [description]
     * @return {BespokeString} A BespokeString instance.
     */
    pad(length?: number, char?: string): BespokeString;
    /**
     * Transform the contents to subscript characters.
     * @return {BespokeString} A BespokeString instance.
     */
    toSub(): BespokeString;
    /**
     * Transform the contents to superscript characters.
     * @return {BespokeString} A BespokeString instance.
     */
    toSuper(): BespokeString;
    /**
     * Print Emoji characters.
     *
     * Totally naïve implentation right now, just pad wide emoji chars with a space.
     * @return {BespokeString} A BespokeString instance.
     */
    asEmoji(): BespokeString;
    /**
     * Print the content as a graphic box.
     * @param  {Object} options Boxen options.
     * @return {BespokeString} A BespokeString instance.
     */
    inBox(options?: any): BespokeString;
    valueOf(): string;
    toString(): string;
}
/**
 * Helper method for creating a BespokeString instance
 * @param  {String} content - String content.
 * @return {BespokeString} A BespokeString instance.
 */
export function bespokeString(content: string): BespokeString;
/**
 * Helper method for creating a visual box (using boxen)
 * @param  {String} content     Box content.
 * @param  {Object} options Boxen options.
 * @return {String} The contructed box.
 */
export function box(content: string, options: any): string;
/**
 * Helper method from creating a wide Emoji character.
 * @param  {String} content The emoji to print.
 * @return {String} The Emoji string.
 */
export function emoji(content: string): string;
/**
 * Helper method for padding a string.
 * @param  {String} content    The string to pad.
 * @param  {Number} length Target length.
 * @param  {String} char   Character to use for pad.
 * @return {String} The padded string.
 */
export function pad(content: string, length: number, char: string): string;
/**
 * Helper method from creating a simple Unicode subscript representation.
 * @param  {String} content The string to transform to subscript.
 * @return {String} The subscript string.
 */
export function toSubscript(content: string): string;
/**
 * Helper method from creating a simple Unicode superscript representation.
 * @param  {String} content The string to transform to superscript.
 * @return {String} The superscript string.
 */
export function toSuperscript(content: string): string;
