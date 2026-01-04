import type { DocSection } from '../types';

export const docSections: DocSection[] = [
  {
    id: 'level-blueprint',
    title: 'Level Blueprint',
    content: `The Level Blueprint is the master blueprint for controlling gameplay logic at the level instance. It's perfect for managing level-specific events, actors, and gameplay sequences.

**Key Features:**
- Event Begin Play - Fires when the level starts
- Event Tick - Executes every frame
- Event Actor Begin Overlap - Detects actor collisions
- Cast To [Actor Class] - Type-casting nodes for safe actor references

**Common Uses:**
- Spawn actors at level start
- Manage level progression
- Control environmental systems
- Handle player interaction triggers`,
  },
  {
    id: 'character-blueprint',
    title: 'Character Blueprint',
    content: `Character Blueprints handle the player character or AI characters with movement, animation, and input handling capabilities.

**Key Features:**
- Event Begin Play - Initialize character properties
- Input Action Events - Handle keyboard and gamepad input
- Event Tick - Update character logic each frame
- Set Actor Location - Move character in space
- Play Montage - Trigger character animations

**Common Uses:**
- Player character control
- Animation state management
- Ability systems
- Health and damage handling`,
  },
  {
    id: 'pawn-blueprint',
    title: 'Pawn Blueprint',
    content: `Pawns are simpler than Characters but offer more flexibility for non-humanoid actors and game logic handlers.

**Key Features:**
- Event Possess - Called when a controller takes control
- Event Unpossess - Called when losing control
- Input Setup in Event Begin Play
- Add Movement Input - For custom movement systems
- Set Actor Rotation - Control facing direction

**Common Uses:**
- AI behavior systems
- Vehicle controls
- Object interaction handlers
- Custom controller logic`,
  },
  {
    id: 'actor-blueprint',
    title: 'Actor Blueprint',
    content: `The base Actor Blueprint is the foundation for any interactive object in your level - from doors to pickups to environmental hazards.

**Key Features:**
- Event Begin Play - Initialize when spawned
- Event End Play - Cleanup when destroyed
- On Component Begin Overlap - Collision detection
- Destroy Actor - Remove from world
- Set Visibility - Show/hide actor

**Common Uses:**
- Interactive objects (doors, switches, chests)
- Pickups and collectibles
- Environmental hazards
- Physics-enabled objects`,
  },
  {
    id: 'interface-blueprint',
    title: 'Blueprint Interface',
    content: `Blueprint Interfaces define a contract that multiple blueprints can implement, allowing different classes to respond to the same function calls.

**Key Features:**
- Define function signatures without implementation
- Multiple blueprints can implement the same interface
- Polymorphic function calls across different types
- Query capabilities - Check if actor implements interface

**Common Uses:**
- Damage-able interface for health systems
- Interactable interface for pickup items
- AI perception interfaces
- Event notification systems`,
  },
  {
    id: 'event-graph',
    title: 'Event Graph Fundamentals',
    content: `The Event Graph is where visual scripting logic lives. It's composed of nodes connected by wires that execute from left to right.

**Common Event Nodes:**
- Event Begin Play - Executes once when actor spawns
- Event Tick - Runs every frame (Delta Seconds = frame time)
- Event Any Damage - Called when damage is applied
- Event Begin Overlap - Two actors collide

**Flow Control Nodes:**
- Branch - If/Then/Else logic
- Do N Times - Loop execution
- For Each Loop - Iterate over arrays
- Delay - Wait before next execution

**Best Practices:**
- Keep Event Graph organized and readable
- Use Functions for reusable logic
- Avoid circular references
- Comment and group related nodes`,
  },
  {
    id: 'variables-casting',
    title: 'Variables & Type Casting',
    content: `Variables store data that can be read and modified. Type Casting ensures safe interaction with specific actor types.

**Variable Types:**
- Boolean - True/False values
- Integer - Whole numbers
- Float - Decimal numbers
- String - Text data
- Vector - 3D coordinates (X, Y, Z)
- Rotator - Rotation in Pitch, Yaw, Roll

**Casting Nodes:**
- Cast To [Actor Class] - Safe type conversion
- Is Valid - Check if reference exists
- Get Class - Get object's class type

**Variable Properties:**
- Instance Editable - Changeable in editor
- Compile/Runtime Editable - Changeable at runtime
- Private - Hidden from other blueprints`,
  },
  {
    id: 'best-practices',
    title: 'Blueprint Best Practices',
    content: `Follow these guidelines to create maintainable and performant blueprints.

**Organization:**
- Use Function Libraries for reusable code
- Create Blueprint Interfaces for polymorphism
- Keep graphs clean and well-commented
- Use consistent naming conventions
- Group related nodes together

**Performance:**
- Avoid expensive operations in Event Tick
- Use timers instead of constant checks
- Cache references when possible
- Destroy unused actors

**Debugging:**
- Use Print String nodes for quick debugging
- Enable breakpoints on nodes
- Watch variable values in editor
- Use Blueprint Debugger window

**Code Structure:**
- Separate logic into Functions
- Use Macros for repeated patterns
- Implement error checking
- Document complex behavior`,
  },
];
