/**
 * @file options.h
 *
 * The options that can be passed to parsing.
 */
#ifndef PRISM_OPTIONS_H
#define PRISM_OPTIONS_H

#include "prism/defines.h"
#include "prism/util/pm_string.h"

#include <stdbool.h>
#include <stddef.h>
#include <stdint.h>

/**
 * String literals should be made frozen.
 */
#define PM_OPTIONS_FROZEN_STRING_LITERAL_DISABLED   ((int8_t) -1)

/**
 * String literals may be frozen or mutable depending on the implementation
 * default.
 */
#define PM_OPTIONS_FROZEN_STRING_LITERAL_UNSET      ((int8_t)  0)

/**
 * String literals should be made mutable.
 */
#define PM_OPTIONS_FROZEN_STRING_LITERAL_ENABLED    ((int8_t)  1)

/**
 * A scope of locals surrounding the code that is being parsed.
 */
typedef struct pm_options_scope {
    /** The number of locals in the scope. */
    size_t locals_count;

    /** The names of the locals in the scope. */
    pm_string_t *locals;
} pm_options_scope_t;

/**
 * The version of Ruby syntax that we should be parsing with. This is used to
 * allow consumers to specify which behavior they want in case they need to
 * parse in the same way as a specific version of CRuby would have.
 */
typedef enum {
    /** The current version of prism. */
    PM_OPTIONS_VERSION_LATEST = 0,

    /** The vendored version of prism in CRuby 3.3.0. */
    PM_OPTIONS_VERSION_CRUBY_3_3_0 = 1
} pm_options_version_t;

/**
 * The options that can be passed to the parser.
 */
typedef struct {
    /** The name of the file that is currently being parsed. */
    pm_string_t filepath;

    /**
     * The line within the file that the parse starts on. This value is
     * 1-indexed.
     */
    int32_t line;

    /**
     * The name of the encoding that the source file is in. Note that this must
     * correspond to a name that can be found with Encoding.find in Ruby.
     */
    pm_string_t encoding;

    /**
     * The number of scopes surrounding the code that is being parsed.
     */
    size_t scopes_count;

    /**
     * The scopes surrounding the code that is being parsed. For most parses
     * this will be NULL, but for evals it will be the locals that are in scope
     * surrounding the eval. Scopes are ordered from the outermost scope to the
     * innermost one.
     */
    pm_options_scope_t *scopes;

    /**
     * The version of prism that we should be parsing with. This is used to
     * allow consumers to specify which behavior they want in case they need to
     * parse exactly as a specific version of CRuby.
     */
    pm_options_version_t version;

    /** A bitset of the various options that were set on the command line. */
    uint8_t command_line;

    /**
    * Whether or not the frozen string literal option has been set.
    * May be:
    *  - PM_OPTIONS_FROZEN_STRING_LITERAL_DISABLED
    *  - PM_OPTIONS_FROZEN_STRING_LITERAL_ENABLED
    *  - PM_OPTIONS_FROZEN_STRING_LITERAL_UNSET
    */
    int8_t frozen_string_literal;
} pm_options_t;

/**
 * A bit representing whether or not the command line -a option was set. -a
 * splits the input line $_ into $F.
 */
static const uint8_t PM_OPTIONS_COMMAND_LINE_A = 0x1;

/**
 * A bit representing whether or not the command line -e option was set. -e
 * allow the user to specify a script to be executed. This is necessary for
 * prism to know because certain warnings are not generated when -e is used.
 */
static const uint8_t PM_OPTIONS_COMMAND_LINE_E = 0x2;

/**
 * A bit representing whether or not the command line -l option was set. -l
 * chomps the input line by default.
 */
static const uint8_t PM_OPTIONS_COMMAND_LINE_L = 0x4;

/**
 * A bit representing whether or not the command line -n option was set. -n
 * wraps the script in a while gets loop.
 */
static const uint8_t PM_OPTIONS_COMMAND_LINE_N = 0x8;

/**
 * A bit representing whether or not the command line -p option was set. -p
 * prints the value of $_ at the end of each loop.
 */
static const uint8_t PM_OPTIONS_COMMAND_LINE_P = 0x10;

/**
 * A bit representing whether or not the command line -x option was set. -x
 * searches the input file for a shebang that matches the current Ruby engine.
 */
static const uint8_t PM_OPTIONS_COMMAND_LINE_X = 0x20;

/**
 * Set the filepath option on the given options struct.
 *
 * @param options The options struct to set the filepath on.
 * @param filepath The filepath to set.
 */
PRISM_EXPORTED_FUNCTION void pm_options_filepath_set(pm_options_t *options, const char *filepath);

/**
 * Set the line option on the given options struct.
 *
 * @param options The options struct to set the line on.
 * @param line The line to set.
 */
PRISM_EXPORTED_FUNCTION void pm_options_line_set(pm_options_t *options, int32_t line);

/**
 * Set the encoding option on the given options struct.
 *
 * @param options The options struct to set the encoding on.
 * @param encoding The encoding to set.
 */
PRISM_EXPORTED_FUNCTION void pm_options_encoding_set(pm_options_t *options, const char *encoding);

/**
 * Set the frozen string literal option on the given options struct.
 *
 * @param options The options struct to set the frozen string literal value on.
 * @param frozen_string_literal The frozen string literal value to set.
 */
PRISM_EXPORTED_FUNCTION void pm_options_frozen_string_literal_set(pm_options_t *options, bool frozen_string_literal);

/**
 * Sets the command line option on the given options struct.
 *
 * @param options The options struct to set the command line option on.
 * @param command_line The command_line value to set.
 */
PRISM_EXPORTED_FUNCTION void pm_options_command_line_set(pm_options_t *options, uint8_t command_line);

/**
 * Set the version option on the given options struct by parsing the given
 * string. If the string contains an invalid option, this returns false.
 * Otherwise, it returns true.
 *
 * @param options The options struct to set the version on.
 * @param version The version to set.
 * @param length The length of the version string.
 * @return Whether or not the version was parsed successfully.
 */
PRISM_EXPORTED_FUNCTION bool pm_options_version_set(pm_options_t *options, const char *version, size_t length);

/**
 * Allocate and zero out the scopes array on the given options struct.
 *
 * @param options The options struct to initialize the scopes array on.
 * @param scopes_count The number of scopes to allocate.
 * @return Whether or not the scopes array was initialized successfully.
 */
PRISM_EXPORTED_FUNCTION bool pm_options_scopes_init(pm_options_t *options, size_t scopes_count);

/**
 * Return a pointer to the scope at the given index within the given options.
 *
 * @param options The options struct to get the scope from.
 * @param index The index of the scope to get.
 * @return A pointer to the scope at the given index.
 */
PRISM_EXPORTED_FUNCTION const pm_options_scope_t * pm_options_scope_get(const pm_options_t *options, size_t index);

/**
 * Create a new options scope struct. This will hold a set of locals that are in
 * scope surrounding the code that is being parsed.
 *
 * @param scope The scope struct to initialize.
 * @param locals_count The number of locals to allocate.
 * @return Whether or not the scope was initialized successfully.
 */
PRISM_EXPORTED_FUNCTION bool pm_options_scope_init(pm_options_scope_t *scope, size_t locals_count);

/**
 * Return a pointer to the local at the given index within the given scope.
 *
 * @param scope The scope struct to get the local from.
 * @param index The index of the local to get.
 * @return A pointer to the local at the given index.
 */
PRISM_EXPORTED_FUNCTION const pm_string_t * pm_options_scope_local_get(const pm_options_scope_t *scope, size_t index);

/**
 * Free the internal memory associated with the options.
 *
 * @param options The options struct whose internal memory should be freed.
 */
PRISM_EXPORTED_FUNCTION void pm_options_free(pm_options_t *options);

/**
 * Deserialize an options struct from the given binary string. This is used to
 * pass options to the parser from an FFI call so that consumers of the library
 * from an FFI perspective don't have to worry about the structure of our
 * options structs. Since the source of these calls will be from Ruby
 * implementation internals we assume it is from a trusted source.
 *
 * `data` is assumed to be a valid pointer pointing to well-formed data. The
 * layout of this data should be the same every time, and is described below:
 *
 * | # bytes | field                      |
 * | ------- | -------------------------- |
 * | `4`     | the length of the filepath |
 * | ...     | the filepath bytes         |
 * | `4`     | the line number            |
 * | `4`     | the length the encoding    |
 * | ...     | the encoding bytes         |
 * | `1`     | frozen string literal      |
 * | `1`     | -p command line option     |
 * | `1`     | -n command line option     |
 * | `1`     | -l command line option     |
 * | `1`     | -a command line option     |
 * | `1`     | the version                |
 * | `4`     | the number of scopes       |
 * | ...     | the scopes                 |
 *
 * The version field is an enum, so it should be one of the following values:
 *
 * | value | version                   |
 * | ----- | ------------------------- |
 * | `0`   | use the latest version of prism |
 * | `1`   | use the version of prism that is vendored in CRuby 3.3.0 |
 *
 * Each scope is laid out as follows:
 *
 * | # bytes | field                      |
 * | ------- | -------------------------- |
 * | `4`     | the number of locals       |
 * | ...     | the locals                 |
 *
 * Each local is laid out as follows:
 *
 * | # bytes | field                      |
 * | ------- | -------------------------- |
 * | `4`     | the length of the local    |
 * | ...     | the local bytes            |
 *
 * Some additional things to note about this layout:
 *
 * * The filepath can have a length of 0, in which case we'll consider it an
 *   empty string.
 * * The line number should be 0-indexed.
 * * The encoding can have a length of 0, in which case we'll use the default
 *   encoding (UTF-8). If it's not 0, it should correspond to a name of an
 *   encoding that can be passed to `Encoding.find` in Ruby.
 * * The frozen string literal and suppress warnings fields are booleans, so
 *   their values should be either 0 or 1.
 * * The number of scopes can be 0.
 *
 * @param options The options struct to deserialize into.
 * @param data The binary string to deserialize from.
 */
void pm_options_read(pm_options_t *options, const char *data);

#endif
